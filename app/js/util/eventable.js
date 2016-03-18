import mixin from 'app/util/mixin';

/**
 * Creates an instances eventable mixin.
 * @param {array<string>} types - The event types.
 * @return {function}
 */
export default function(...types) {
  /**
   * The instanced lookup.
   * @return {Map}
   * @private
   */
  function getEventLookup(scope) {
    if (!scope.__eventLookup) {
      scope.__eventLookup = types.reduce((sum, t) => {
        sum.set(t, new Set());
        return sum;
      }, new Map());
    }

    return scope.__eventLookup;
  }

  const m = mixin({

    /**
     * Trigger an event.
     * @param {string} name - The event name.
     * @param {array=} data - The fn data.
     */
    trigger(name, ...data) {
      const handlers = getEventLookup(this).get(name);

      handlers.forEach((fn) => {
        fn(...data);
      });
    },

    /**
     * Add a listener.
     * @param {string} name - The event name.
     * @param {function} fn - The callback function.
     */
    on(name, fn) {
      const handlers = getEventLookup(this).get(name);

      if (!handlers) { return; }

      if (!fn) {
        throw new Error('Cannot attach an event with a function');
      }

      handlers.add(fn);
    },

    /**
     * Remove a listener.
     * @param {string} name - The event name.
     * @param {function} fn - The callback function to remove.
     */
    off(name, fn) {
      const handlers = getEventLookup(this).get(name);

      if (handlers) {
        handlers.delete(fn);
      }
    },
  });

  return function makeEventable(target) {
    m(target.prototype);

    if (typeof target.prototype.tearDown === 'function') {
      const originalTearDown = target.prototype.tearDown;
      target.prototype.tearDown = function eventableTearDown() {
        this.__eventLookup = null;
        return originalTearDown.apply(this, arguments);
      };
    }
  };
}

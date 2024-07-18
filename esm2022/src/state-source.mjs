export const STATE_SOURCE = Symbol('STATE_SOURCE');
export function patchState(stateSource, ...updaters) {
    stateSource[STATE_SOURCE].update((currentState) => updaters.reduce((nextState, updater) => ({
        ...nextState,
        ...(typeof updater === 'function' ? updater(nextState) : updater),
    }), currentState));
}
export function getState(stateSource) {
    return stateSource[STATE_SOURCE]();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zaWduYWxzL3NyYy9zdGF0ZS1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQWNuRCxNQUFNLFVBQVUsVUFBVSxDQUN4QixXQUF1QyxFQUN2QyxHQUFHLFFBRUY7SUFFRCxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FDaEQsUUFBUSxDQUFDLE1BQU0sQ0FDYixDQUFDLFNBQWdCLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLEdBQUcsU0FBUztRQUNaLEdBQUcsQ0FBQyxPQUFPLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0tBQ2xFLENBQUMsRUFDRixZQUFZLENBQ2IsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQ3RCLFdBQStCO0lBRS9CLE9BQU8sV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7QUFDckMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZ25hbCwgV3JpdGFibGVTaWduYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByZXR0aWZ5IH0gZnJvbSAnLi90cy1oZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IFNUQVRFX1NPVVJDRSA9IFN5bWJvbCgnU1RBVEVfU09VUkNFJyk7XG5cbmV4cG9ydCB0eXBlIFdyaXRhYmxlU3RhdGVTb3VyY2U8U3RhdGUgZXh0ZW5kcyBvYmplY3Q+ID0ge1xuICBbU1RBVEVfU09VUkNFXTogV3JpdGFibGVTaWduYWw8U3RhdGU+O1xufTtcblxuZXhwb3J0IHR5cGUgU3RhdGVTb3VyY2U8U3RhdGUgZXh0ZW5kcyBvYmplY3Q+ID0ge1xuICBbU1RBVEVfU09VUkNFXTogU2lnbmFsPFN0YXRlPjtcbn07XG5cbmV4cG9ydCB0eXBlIFBhcnRpYWxTdGF0ZVVwZGF0ZXI8U3RhdGUgZXh0ZW5kcyBvYmplY3Q+ID0gKFxuICBzdGF0ZTogU3RhdGVcbikgPT4gUGFydGlhbDxTdGF0ZT47XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFN0YXRlPFN0YXRlIGV4dGVuZHMgb2JqZWN0PihcbiAgc3RhdGVTb3VyY2U6IFdyaXRhYmxlU3RhdGVTb3VyY2U8U3RhdGU+LFxuICAuLi51cGRhdGVyczogQXJyYXk8XG4gICAgUGFydGlhbDxQcmV0dGlmeTxTdGF0ZT4+IHwgUGFydGlhbFN0YXRlVXBkYXRlcjxQcmV0dGlmeTxTdGF0ZT4+XG4gID5cbik6IHZvaWQge1xuICBzdGF0ZVNvdXJjZVtTVEFURV9TT1VSQ0VdLnVwZGF0ZSgoY3VycmVudFN0YXRlKSA9PlxuICAgIHVwZGF0ZXJzLnJlZHVjZShcbiAgICAgIChuZXh0U3RhdGU6IFN0YXRlLCB1cGRhdGVyKSA9PiAoe1xuICAgICAgICAuLi5uZXh0U3RhdGUsXG4gICAgICAgIC4uLih0eXBlb2YgdXBkYXRlciA9PT0gJ2Z1bmN0aW9uJyA/IHVwZGF0ZXIobmV4dFN0YXRlKSA6IHVwZGF0ZXIpLFxuICAgICAgfSksXG4gICAgICBjdXJyZW50U3RhdGVcbiAgICApXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZTxTdGF0ZSBleHRlbmRzIG9iamVjdD4oXG4gIHN0YXRlU291cmNlOiBTdGF0ZVNvdXJjZTxTdGF0ZT5cbik6IFN0YXRlIHtcbiAgcmV0dXJuIHN0YXRlU291cmNlW1NUQVRFX1NPVVJDRV0oKTtcbn1cbiJdfQ==
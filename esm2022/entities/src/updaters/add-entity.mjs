import { addEntityMutably, cloneEntityState, getEntityIdSelector, getEntityStateKeys, getEntityUpdaterResult, } from '../helpers';
export function addEntity(entity, config) {
    const selectId = getEntityIdSelector(config);
    const stateKeys = getEntityStateKeys(config);
    return (state) => {
        const clonedState = cloneEntityState(state, stateKeys);
        const didMutate = addEntityMutably(clonedState, entity, selectId);
        return getEntityUpdaterResult(clonedState, stateKeys, didMutate);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc2lnbmFscy9lbnRpdGllcy9zcmMvdXBkYXRlcnMvYWRkLWVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLHNCQUFzQixHQUN2QixNQUFNLFlBQVksQ0FBQztBQW9CcEIsTUFBTSxVQUFVLFNBQVMsQ0FDdkIsTUFBVyxFQUNYLE1BQWdFO0lBRWhFLE1BQU0sUUFBUSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLE1BQU0sU0FBUyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTdDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNmLE1BQU0sV0FBVyxHQUFHLGdCQUFnQixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2RCxNQUFNLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRWxFLE9BQU8sc0JBQXNCLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFydGlhbFN0YXRlVXBkYXRlciB9IGZyb20gJ0BuZ3J4L3NpZ25hbHMnO1xuaW1wb3J0IHtcbiAgRW50aXR5SWQsXG4gIEVudGl0eVN0YXRlLFxuICBOYW1lZEVudGl0eVN0YXRlLFxuICBTZWxlY3RFbnRpdHlJZCxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7XG4gIGFkZEVudGl0eU11dGFibHksXG4gIGNsb25lRW50aXR5U3RhdGUsXG4gIGdldEVudGl0eUlkU2VsZWN0b3IsXG4gIGdldEVudGl0eVN0YXRlS2V5cyxcbiAgZ2V0RW50aXR5VXBkYXRlclJlc3VsdCxcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFbnRpdHk8RW50aXR5IGV4dGVuZHMgeyBpZDogRW50aXR5SWQgfT4oXG4gIGVudGl0eTogRW50aXR5XG4pOiBQYXJ0aWFsU3RhdGVVcGRhdGVyPEVudGl0eVN0YXRlPEVudGl0eT4+O1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEVudGl0eTxFbnRpdHksIENvbGxlY3Rpb24gZXh0ZW5kcyBzdHJpbmc+KFxuICBlbnRpdHk6IEVudGl0eSxcbiAgY29uZmlnOiB7IGNvbGxlY3Rpb246IENvbGxlY3Rpb247IHNlbGVjdElkOiBTZWxlY3RFbnRpdHlJZDxOb0luZmVyPEVudGl0eT4+IH1cbik6IFBhcnRpYWxTdGF0ZVVwZGF0ZXI8TmFtZWRFbnRpdHlTdGF0ZTxFbnRpdHksIENvbGxlY3Rpb24+PjtcbmV4cG9ydCBmdW5jdGlvbiBhZGRFbnRpdHk8XG4gIEVudGl0eSBleHRlbmRzIHsgaWQ6IEVudGl0eUlkIH0sXG4gIENvbGxlY3Rpb24gZXh0ZW5kcyBzdHJpbmdcbj4oXG4gIGVudGl0eTogRW50aXR5LFxuICBjb25maWc6IHsgY29sbGVjdGlvbjogQ29sbGVjdGlvbiB9XG4pOiBQYXJ0aWFsU3RhdGVVcGRhdGVyPE5hbWVkRW50aXR5U3RhdGU8RW50aXR5LCBDb2xsZWN0aW9uPj47XG5leHBvcnQgZnVuY3Rpb24gYWRkRW50aXR5PEVudGl0eT4oXG4gIGVudGl0eTogRW50aXR5LFxuICBjb25maWc6IHsgc2VsZWN0SWQ6IFNlbGVjdEVudGl0eUlkPE5vSW5mZXI8RW50aXR5Pj4gfVxuKTogUGFydGlhbFN0YXRlVXBkYXRlcjxFbnRpdHlTdGF0ZTxFbnRpdHk+PjtcbmV4cG9ydCBmdW5jdGlvbiBhZGRFbnRpdHkoXG4gIGVudGl0eTogYW55LFxuICBjb25maWc/OiB7IGNvbGxlY3Rpb24/OiBzdHJpbmc7IHNlbGVjdElkPzogU2VsZWN0RW50aXR5SWQ8YW55PiB9XG4pOiBQYXJ0aWFsU3RhdGVVcGRhdGVyPEVudGl0eVN0YXRlPGFueT4gfCBOYW1lZEVudGl0eVN0YXRlPGFueSwgc3RyaW5nPj4ge1xuICBjb25zdCBzZWxlY3RJZCA9IGdldEVudGl0eUlkU2VsZWN0b3IoY29uZmlnKTtcbiAgY29uc3Qgc3RhdGVLZXlzID0gZ2V0RW50aXR5U3RhdGVLZXlzKGNvbmZpZyk7XG5cbiAgcmV0dXJuIChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGNsb25lZFN0YXRlID0gY2xvbmVFbnRpdHlTdGF0ZShzdGF0ZSwgc3RhdGVLZXlzKTtcbiAgICBjb25zdCBkaWRNdXRhdGUgPSBhZGRFbnRpdHlNdXRhYmx5KGNsb25lZFN0YXRlLCBlbnRpdHksIHNlbGVjdElkKTtcblxuICAgIHJldHVybiBnZXRFbnRpdHlVcGRhdGVyUmVzdWx0KGNsb25lZFN0YXRlLCBzdGF0ZUtleXMsIGRpZE11dGF0ZSk7XG4gIH07XG59XG4iXX0=
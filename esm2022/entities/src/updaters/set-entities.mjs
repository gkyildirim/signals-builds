import { cloneEntityState, getEntityIdKey, getEntityStateKeys, getEntityUpdaterResult, setEntitiesMutably, } from '../helpers';
export function setEntities(entities, config) {
    const idKey = getEntityIdKey(config);
    const stateKeys = getEntityStateKeys(config);
    return (state) => {
        const clonedState = cloneEntityState(state, stateKeys);
        const didMutate = setEntitiesMutably(clonedState, entities, idKey);
        return getEntityUpdaterResult(clonedState, stateKeys, didMutate);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWVudGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zaWduYWxzL2VudGl0aWVzL3NyYy91cGRhdGVycy9zZXQtZW50aXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLHNCQUFzQixFQUN0QixrQkFBa0IsR0FDbkIsTUFBTSxZQUFZLENBQUM7QUFvQnBCLE1BQU0sVUFBVSxXQUFXLENBQ3pCLFFBQWUsRUFDZixNQUFnRDtJQUVoRCxNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFN0MsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2YsTUFBTSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sU0FBUyxHQUFHLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbkUsT0FBTyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXJ0aWFsU3RhdGVVcGRhdGVyIH0gZnJvbSAnQG5ncngvc2lnbmFscyc7XG5pbXBvcnQge1xuICBFbnRpdHlJZCxcbiAgRW50aXR5SWRLZXksXG4gIEVudGl0eVN0YXRlLFxuICBOYW1lZEVudGl0eVN0YXRlLFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtcbiAgY2xvbmVFbnRpdHlTdGF0ZSxcbiAgZ2V0RW50aXR5SWRLZXksXG4gIGdldEVudGl0eVN0YXRlS2V5cyxcbiAgZ2V0RW50aXR5VXBkYXRlclJlc3VsdCxcbiAgc2V0RW50aXRpZXNNdXRhYmx5LFxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEVudGl0aWVzPEVudGl0eSBleHRlbmRzIHsgaWQ6IEVudGl0eUlkIH0+KFxuICBlbnRpdGllczogRW50aXR5W11cbik6IFBhcnRpYWxTdGF0ZVVwZGF0ZXI8RW50aXR5U3RhdGU8RW50aXR5Pj47XG5leHBvcnQgZnVuY3Rpb24gc2V0RW50aXRpZXM8RW50aXR5LCBDb2xsZWN0aW9uIGV4dGVuZHMgc3RyaW5nPihcbiAgZW50aXRpZXM6IEVudGl0eVtdLFxuICBjb25maWc6IHsgY29sbGVjdGlvbjogQ29sbGVjdGlvbjsgaWRLZXk6IEVudGl0eUlkS2V5PEVudGl0eT4gfVxuKTogUGFydGlhbFN0YXRlVXBkYXRlcjxOYW1lZEVudGl0eVN0YXRlPEVudGl0eSwgQ29sbGVjdGlvbj4+O1xuZXhwb3J0IGZ1bmN0aW9uIHNldEVudGl0aWVzPFxuICBFbnRpdHkgZXh0ZW5kcyB7IGlkOiBFbnRpdHlJZCB9LFxuICBDb2xsZWN0aW9uIGV4dGVuZHMgc3RyaW5nXG4+KFxuICBlbnRpdGllczogRW50aXR5W10sXG4gIGNvbmZpZzogeyBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uIH1cbik6IFBhcnRpYWxTdGF0ZVVwZGF0ZXI8TmFtZWRFbnRpdHlTdGF0ZTxFbnRpdHksIENvbGxlY3Rpb24+PjtcbmV4cG9ydCBmdW5jdGlvbiBzZXRFbnRpdGllczxFbnRpdHk+KFxuICBlbnRpdGllczogRW50aXR5W10sXG4gIGNvbmZpZzogeyBpZEtleTogRW50aXR5SWRLZXk8RW50aXR5PiB9XG4pOiBQYXJ0aWFsU3RhdGVVcGRhdGVyPEVudGl0eVN0YXRlPEVudGl0eT4+O1xuZXhwb3J0IGZ1bmN0aW9uIHNldEVudGl0aWVzKFxuICBlbnRpdGllczogYW55W10sXG4gIGNvbmZpZz86IHsgY29sbGVjdGlvbj86IHN0cmluZzsgaWRLZXk/OiBzdHJpbmcgfVxuKTogUGFydGlhbFN0YXRlVXBkYXRlcjxFbnRpdHlTdGF0ZTxhbnk+IHwgTmFtZWRFbnRpdHlTdGF0ZTxhbnksIHN0cmluZz4+IHtcbiAgY29uc3QgaWRLZXkgPSBnZXRFbnRpdHlJZEtleShjb25maWcpO1xuICBjb25zdCBzdGF0ZUtleXMgPSBnZXRFbnRpdHlTdGF0ZUtleXMoY29uZmlnKTtcblxuICByZXR1cm4gKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgY2xvbmVkU3RhdGUgPSBjbG9uZUVudGl0eVN0YXRlKHN0YXRlLCBzdGF0ZUtleXMpO1xuICAgIGNvbnN0IGRpZE11dGF0ZSA9IHNldEVudGl0aWVzTXV0YWJseShjbG9uZWRTdGF0ZSwgZW50aXRpZXMsIGlkS2V5KTtcblxuICAgIHJldHVybiBnZXRFbnRpdHlVcGRhdGVyUmVzdWx0KGNsb25lZFN0YXRlLCBzdGF0ZUtleXMsIGRpZE11dGF0ZSk7XG4gIH07XG59XG4iXX0=
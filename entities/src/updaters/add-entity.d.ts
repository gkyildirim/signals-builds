import { PartialStateUpdater } from '@ngrx/signals';
import { EntityId, EntityIdKey, EntityState, NamedEntityState } from '../models';
export declare function addEntity<Entity extends {
    id: EntityId;
}>(entity: Entity): PartialStateUpdater<EntityState<Entity>>;
export declare function addEntity<Entity, Collection extends string>(entity: Entity, config: {
    collection: Collection;
    idKey: EntityIdKey<Entity>;
}): PartialStateUpdater<NamedEntityState<Entity, Collection>>;
export declare function addEntity<Entity extends {
    id: EntityId;
}, Collection extends string>(entity: Entity, config: {
    collection: Collection;
}): PartialStateUpdater<NamedEntityState<Entity, Collection>>;
export declare function addEntity<Entity>(entity: Entity, config: {
    idKey: EntityIdKey<Entity>;
}): PartialStateUpdater<EntityState<Entity>>;

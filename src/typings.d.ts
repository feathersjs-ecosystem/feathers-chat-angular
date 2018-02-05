/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// tslint:disable
// feathers-reactive's bundled typings still augment module 'feathers' (auk). This stub keeps TS from complaining.
// todo: remove when feathers-reactive typings are up-to-date with buzzard
declare module 'feathers' {
  interface NullableId {}
  interface Pagination<T> {}
  interface Params {}
}

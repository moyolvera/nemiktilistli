declare module 'react-native-web-refresh-control' {
  type Key = string | number;

  interface ReactElement<
    P = any,
    T extends string | JSXElementConstructor<any> =
      | string
      | JSXElementConstructor<any>
  > {
    type: T;
    props: P;
    key: Key | null;
  }

  export function patchFlatListProps(): void {}
  export function RefreshControl(
    onRefresh,
    refreshing
  ): ReactElement<{ onRefresh: () => void; refreshing: boolean }, any> {}
}

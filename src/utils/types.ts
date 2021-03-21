/*
type Key = string | number | symbol;

export type DiffEnum<T extends Key, U extends Key> = ({ [P in T]: P } &
    { [P in U]: never } & { [x: string]: never })[T];

export type Omit<T, K extends keyof T> = Pick<T, DiffEnum<keyof T, K>>;

export type Diff<A extends B, B> = Omit<A, keyof B>;

export type DiffPartial<A extends Partial<B>, B> = Partial<A> & Diff<A, Partial<B>>;

export type ComponentPartialElement<A, B> = (props: B) => React.ReactElement<A>;

export type Reducer<S, A> = (state: S, action: A) => S;
*/

export type ActionCreator<A extends { type: string }> = () => A;

export type ActionCreatorWithPayload<A extends { type: string; payload: {} }> = (payload: A['payload']) => A;

import { Type } from '@angular/core';
import { StateSignal } from './state-signal';
import { EmptyFeatureResult, InnerSignalStore, MergeFeatureResults, SignalStoreConfig, SignalStoreFeature, SignalStoreFeatureResult, SignalStoreProps } from './signal-store-models';
import { Prettify } from './ts-helpers';
export declare function signalStore<F1 extends SignalStoreFeatureResult>(f1: SignalStoreFeature<EmptyFeatureResult, F1>): Type<SignalStoreProps<F1> & StateSignal<Prettify<F1['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[F1, F2]>>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[F1, F2, F3]>>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[F1, F2, F3, F4]>>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[F1, F2, F3, F4, F5]>>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[
    F1,
    F2,
    F3,
    F4,
    F5,
    F6
]>>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, F7 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[
    F1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7
]>>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>, f7: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>, F7>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, F7 extends SignalStoreFeatureResult, F8 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[
    F1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7,
    F8
]>>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>, f7: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>, F7>, f8: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7]>, F8>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, F7 extends SignalStoreFeatureResult, F8 extends SignalStoreFeatureResult, F9 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[
    F1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7,
    F8,
    F9
]>>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>, f7: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>, F7>, f8: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7]>, F8>, f9: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7, F8]>, F9>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>): Type<SignalStoreProps<F1> & StateSignal<Prettify<F1['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[F1, F2]>>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[F1, F2, F3]>>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[F1, F2, F3, F4]>>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[F1, F2, F3, F4, F5]>>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[
    F1,
    F2,
    F3,
    F4,
    F5,
    F6
]>>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, F7 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[
    F1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7
]>>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>, f7: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>, F7>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, F7 extends SignalStoreFeatureResult, F8 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[
    F1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7,
    F8
]>>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>, f7: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>, F7>, f8: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7]>, F8>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, F7 extends SignalStoreFeatureResult, F8 extends SignalStoreFeatureResult, F9 extends SignalStoreFeatureResult, R extends SignalStoreFeatureResult = MergeFeatureResults<[
    F1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7,
    F8,
    F9
]>>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>, f7: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>, F7>, f8: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7]>, F8>, f9: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7, F8]>, F9>): Type<SignalStoreProps<R> & StateSignal<Prettify<R['state']>>>;
export declare function getInitialInnerStore(): InnerSignalStore;

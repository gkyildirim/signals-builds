import { Type } from '@angular/core';
import { EmptyFeatureResult, InnerSignalStore, MergeFeatureResults, SignalStore, SignalStoreConfig, SignalStoreFeature, SignalStoreFeatureResult } from './signal-store-models';
export declare function signalStore<F1 extends SignalStoreFeatureResult>(f1: SignalStoreFeature<EmptyFeatureResult, F1>): Type<SignalStore<F1>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>): Type<SignalStore<MergeFeatureResults<[F1, F2]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3, F4]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3, F4, F5]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, F7 extends SignalStoreFeatureResult>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>, f7: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>, F7>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, F7 extends SignalStoreFeatureResult, F8 extends SignalStoreFeatureResult>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>, f7: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>, F7>, f8: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7]>, F8>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7, F8]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, F7 extends SignalStoreFeatureResult, F8 extends SignalStoreFeatureResult, F9 extends SignalStoreFeatureResult>(f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>, f7: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>, F7>, f8: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7]>, F8>, f9: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7, F8]>, F9>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7, F8, F9]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>): Type<SignalStore<F1>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>): Type<SignalStore<MergeFeatureResults<[F1, F2]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3, F4]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3, F4, F5]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, F7 extends SignalStoreFeatureResult>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>, f7: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>, F7>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, F7 extends SignalStoreFeatureResult, F8 extends SignalStoreFeatureResult>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>, f7: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>, F7>, f8: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7]>, F8>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7, F8]>>>;
export declare function signalStore<F1 extends SignalStoreFeatureResult, F2 extends SignalStoreFeatureResult, F3 extends SignalStoreFeatureResult, F4 extends SignalStoreFeatureResult, F5 extends SignalStoreFeatureResult, F6 extends SignalStoreFeatureResult, F7 extends SignalStoreFeatureResult, F8 extends SignalStoreFeatureResult, F9 extends SignalStoreFeatureResult>(config: SignalStoreConfig, f1: SignalStoreFeature<EmptyFeatureResult, F1>, f2: SignalStoreFeature<{} & F1, F2>, f3: SignalStoreFeature<MergeFeatureResults<[F1, F2]>, F3>, f4: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3]>, F4>, f5: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4]>, F5>, f6: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5]>, F6>, f7: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6]>, F7>, f8: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7]>, F8>, f9: SignalStoreFeature<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7, F8]>, F9>): Type<SignalStore<MergeFeatureResults<[F1, F2, F3, F4, F5, F6, F7, F8, F9]>>>;
export declare function getInitialInnerStore(): InnerSignalStore;

export declare const nextTask: {
    (): Promise<Promise<any>>;
    providedAsync: Promise<{
        popPersistentRecord: any;
        pushPersistentRecord: any;
        topPersistentRecord: any;
    }>;
};

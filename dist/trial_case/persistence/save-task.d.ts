export declare const saveTask: {
    (todo: {
        name: string;
        date: number;
    }): Promise<{
        name: string;
        date: number;
    }>;
    providedAsync: Promise<{
        popPersistentRecord: any;
        pushPersistentRecord: any;
        topPersistentRecord: any;
    }>;
};

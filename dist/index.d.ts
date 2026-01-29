export interface ChangelogOptions {
    from: string;
    to: string;
    output?: string;
}
export declare function generateChangelog(opts: ChangelogOptions): Promise<string>;

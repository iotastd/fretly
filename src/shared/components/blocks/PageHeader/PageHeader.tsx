import type { PageHeaderProps } from "./PageHeader.types";

import styles from "./PageHeader.module.css";

export function PageHeader({ label }: PageHeaderProps) {
    return (
        <header className={styles.header}>
            <h1 className="label">{ label }</h1>
        </header>
    );
}
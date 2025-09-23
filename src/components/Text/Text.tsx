import React from 'react';
import styles from './Text.module.css';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'body' | 'empty';
  color?: 'default' | 'muted';
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  color = 'default',
}) => {
  const className = `${styles[variant]} ${styles[color]}`;

  switch (variant) {
    case 'h1':
      return <h1 className={className}>{children}</h1>;
    case 'h2':
      return <h2 className={className}>{children}</h2>;
    case 'empty':
      return <p className={className}>{children}</p>;
    default:
      return <span className={className}>{children}</span>;
  }
};
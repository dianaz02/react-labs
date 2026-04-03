import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

interface GridLayoutProps {
  children: React.ReactNode;
  columns?: number;
  spacing?: number;
}

export function GridLayout({
  children,
  columns = 2,
  spacing = 12,
}: GridLayoutProps) {
  const { width } = useWindowDimensions();

  const items = React.Children.toArray(children);
  const safeColumns = Math.max(columns, 1);

  const totalSpacing = spacing * (safeColumns - 1);
  const horizontalPadding = spacing * 2;
  const itemWidth = (width - totalSpacing - horizontalPadding - 32) / safeColumns;

  const rows: React.ReactNode[][] = [];
  for (let i = 0; i < items.length; i += safeColumns) {
    rows.push(items.slice(i, i + safeColumns));
  }

  return (
    <View style={[styles.container, { padding: spacing }]}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={[styles.row, { marginBottom: spacing }]}>
          {row.map((item, colIndex) => (
            <View
              key={colIndex}
              style={[
                styles.item,
                {
                  width: itemWidth,
                  marginRight: colIndex < row.length - 1 ? spacing : 0,
                },
              ]}
            >
              {item}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

interface CardProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function Card({ title, subtitle, children }: CardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {subtitle ? <Text style={styles.cardSubtitle}>{subtitle}</Text> : null}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    flexShrink: 0,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
});
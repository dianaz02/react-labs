import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

interface AdaptiveLayoutProps {
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

export function AdaptiveLayout({
  header,
  content,
  footer,
}: AdaptiveLayoutProps) {
  const { width, height } = useWindowDimensions();
  const isTablet = width >= 768;
  const isLandscape = width > height;

  return (
    <View style={styles.container}>
      {header ? <View style={styles.topBlock}>{header}</View> : null}

      <View
        style={[
          styles.main,
          isLandscape && styles.mainLandscape,
          isTablet && styles.mainTablet,
        ]}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            isTablet && styles.scrollContentTablet,
          ]}
          showsVerticalScrollIndicator={false}
        >
          {isTablet ? (
            <TabletLayout>{content}</TabletLayout>
          ) : (
            <PhoneLayout>{content}</PhoneLayout>
          )}
        </ScrollView>
      </View>

      {footer ? <View style={styles.footer}>{footer}</View> : null}
    </View>
  );
}

function PhoneLayout({ children }: { children: React.ReactNode }) {
  return <View style={styles.phoneLayout}>{children}</View>;
}

function TabletLayout({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.tabletLayout}>
      {React.Children.map(children, (child, index) => (
        <View key={index} style={styles.tabletItem}>
          {child}
        </View>
      ))}
    </View>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export function FeatureCard({
  icon,
  title,
  description,
  variant = 'primary',
}: FeatureCardProps) {
  const backgroundColors = {
    primary: '#FFFFFF',
    secondary: '#EEF4FF',
    accent: '#FFF4E8',
  };

  return (
    <View
      style={[styles.featureCard, { backgroundColor: backgroundColors[variant] }]}
    >
      <Text style={styles.featureIcon}>{icon}</Text>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  );
}

interface StatsRowProps {
  stats: Array<{ label: string; value: string }>;
}

export function StatsRow({ stats }: StatsRowProps) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={[styles.statsRow, isTablet && styles.statsRowTablet]}>
      {stats.map((stat, index) => (
        <View key={index} style={styles.statItem}>
          <Text style={[styles.statValue, isTablet && styles.statValueTablet]}>
            {stat.value}
          </Text>
          <Text style={[styles.statLabel, isTablet && styles.statLabelTablet]}>
            {stat.label}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  topBlock: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  main: {
    flex: 1,
  },
  mainLandscape: {
    flexDirection: 'row',
  },
  mainTablet: {
    paddingHorizontal: 12,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 16,
    paddingBottom: 28,
  },
  scrollContentTablet: {
    paddingVertical: 24,
  },
  phoneLayout: {
    paddingHorizontal: 16,
  },
  tabletLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tabletItem: {
    width: '48%',
    marginBottom: 16,
  },
  footer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  featureCard: {
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
    featureIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  statsRowTablet: {
    paddingVertical: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3B5BDB',
    marginBottom: 4,
  },
  statValueTablet: {
    fontSize: 30,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textTransform: 'uppercase',
  },
  statLabelTablet: {
    fontSize: 14,
  },
});
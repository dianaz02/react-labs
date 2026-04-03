import React from 'react';
import { Alert, Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GridLayout, Card } from '../../src/components/GridLayout';
import {
  ResponsiveHeader,
  ResponsiveContainer,
} from '../../src/components/ResponsiveHeader';
import {
  AdaptiveLayout,
  FeatureCard,
  StatsRow,
} from '../../src/components/AdaptiveLayout';

function HomeScreen() {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <ResponsiveContainer>
      <ResponsiveHeader
        title="Lab 12 Responsive App"
        leftAction={{
          icon: '≡',
          onPress: () => Alert.alert('Menu', 'Left menu button pressed'),
        }}
        rightAction={{
          icon: '★',
          onPress: () => Alert.alert('Info', 'Right action button pressed'),
        }}
      />

      <AdaptiveLayout
        header={
          <View style={styles.heroBox}>
            <Text style={styles.heroTitle}>Responsive Layout Demo</Text>
            <Text style={styles.heroSubtitle}>
              Flexbox, Safe Area and adaptive components for different screen sizes.
            </Text>
          </View>
        }
        content={
          <>
            <StatsRow
              stats={[
                { label: 'Screens', value: '3' },
                { label: 'Cards', value: '6' },
                { label: 'Layout', value: 'Flex' },
              ]}
            />

            <FeatureCard
              icon="*"
              title="Phone Support"
              description="The layout adapts for portrait and landscape phone screens."
              variant="primary"
            />

            <FeatureCard
              icon="*"
              title="Tablet Support"
              description="On wider screens, the app shows a multi-column layout."
              variant="secondary"
            />

            <FeatureCard
              icon="*"
              title="Safe Area"
              description="Header and screen content respect device safe areas."
              variant="accent"
            />

            <View style={styles.sectionBlock}>
              <Text style={styles.sectionTitle}>Feature Grid</Text>

              <GridLayout columns={isTablet ? 3 : 2} spacing={12}>
                <Card title="Fast UI" subtitle="Smooth layout">
                  <Text style={styles.cardText}>
                    Built with reusable responsive components.
                  </Text>
                </Card>

                <Card title="Flexbox" subtitle="Adaptive">
                  <Text style={styles.cardText}>
                    Uses rows, spacing and responsive widths.
                  </Text>
                </Card>

                <Card title="Header" subtitle="Safe & clean">
                  <Text style={styles.cardText}>
                    Responsive title and action buttons.
                  </Text>
                </Card>

                <Card title="Tablet Mode" subtitle="Two/three columns">
                  <Text style={styles.cardText}>
                    Larger screens show more content horizontally.
                  </Text>
                </Card>

                <Card title="Readable" subtitle="Simple style">
                  <Text style={styles.cardText}>
                    Basic colors, rounded cards and clear typography.
                  </Text>
                </Card>

                <Card title="Submission Ready" subtitle="Lab 12">
                  <Text style={styles.cardText}>
                    Responsive grid, safe header and adaptive layout.
                  </Text>
                </Card>
              </GridLayout>
            </View>
          </>
        }
        footer={
          <Text style={styles.footerText}>
            Week 12 • Styling & Responsive Layouts
          </Text>
        }
      />
    </ResponsiveContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  heroBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  sectionBlock: {
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    paddingHorizontal: 12,
  },
  cardText: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#666',
  },
});
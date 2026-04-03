import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderAction {
  icon: string;
  onPress: () => void;
}

interface ResponsiveHeaderProps {
  title: string;
  leftAction?: HeaderAction;
  rightAction?: HeaderAction;
}

export function ResponsiveHeader({
  title,
  leftAction,
  rightAction,
}: ResponsiveHeaderProps) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#3B5BDB"
        translucent={Platform.OS === 'android'}
      />
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View
          style={[
            styles.header,
            {
              paddingTop: Platform.OS === 'android' ? insets.top : 0,
              minHeight: 56 + (Platform.OS === 'android' ? insets.top : 0),
            },
          ]}
        >
          <View style={styles.headerContent}>
            <View style={styles.side}>
              {leftAction ? (
                <TouchableOpacity
                  style={styles.headerButton}
                  onPress={leftAction.onPress}
                >
                  <Text style={styles.headerIcon}>{leftAction.icon}</Text>
                </TouchableOpacity>
              ) : null}
            </View>

            <View style={styles.center}>
              <Text
                style={[styles.title, isTablet && styles.titleTablet]}
                numberOfLines={1}
              >
                {title}
              </Text>
            </View>

            <View style={styles.side}>
              {rightAction ? (
                <TouchableOpacity
                  style={styles.headerButton}
                  onPress={rightAction.onPress}
                >
                  <Text style={styles.headerIcon}>{rightAction.icon}</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

interface ResponsiveContainerProps {
  children: React.ReactNode;
}

export function ResponsiveContainer({ children }: ResponsiveContainerProps) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  if (isTablet) {
    return (
      <View style={styles.container}>
        <View style={styles.tabletContainer}>
          <View style={styles.tabletSidebar}>
            <Text style={styles.sidebarTitle}>Menu</Text>
            <Text style={styles.sidebarItem}>Home</Text>
            <Text style={styles.sidebarItem}>Features</Text>
            <Text style={styles.sidebarItem}>Stats</Text>
          </View>

          <View style={styles.tabletContent}>{children}</View>
        </View>
      </View>
    );
  }

  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#3B5BDB',
  },
  header: {
    backgroundColor: '#3B5BDB',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.14,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContent: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  side: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  titleTablet: {
    fontSize: 22,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  tabletContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  tabletSidebar: {
    width: 220,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E5E7EB',
    padding: 20,
  },
  sidebarTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 16,
  },
  sidebarItem: {
    fontSize: 15,
    color: '#555',
    marginBottom: 12,
  },
  tabletContent: {
    flex: 1,
    padding: 12,
  },
});
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProfileCardProps {
  name: string;
  role: string;
  avatar?: string;
  bio: string;
}

export function ProfileCard({ name, role, avatar, bio }: ProfileCardProps) {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: avatar || 'https://via.placeholder.com/150' }} 
        style={styles.avatar} 
      />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5, // Тень для Android
    shadowColor: '#000', // Тень для iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  avatar: { width: 80, height: 80, borderRadius: 40, marginRight: 16 },
  info: { flex: 1 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  role: { fontSize: 16, color: '#0066cc', marginBottom: 4 },
  bio: { fontSize: 14, color: '#666', lineHeight: 20 },
});
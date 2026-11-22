import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

const FACTION_IMAGES: Record<string, any> = {
  Grineer: require('../../assets/factions/grineer.webp'),
  Corpus: require('../../assets/factions/corpus.webp'),
  Infested: require('../../assets/factions/infested.webp'),
  Orokin: require('../../assets/factions/orokin.png'),
  Corrupted: require('../../assets/factions/orokin.png'),
};

const DEFAULT_IMAGE = require('../../assets/factions/default.webp');

export default function VoidFissuresScreen() {
  const [fissures, setFissures] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetch('https://api.warframestat.us/pc/fissures')
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          console.log("Fisuras recibidas:", data.length);
          setFissures(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Error al obtener fisuras:', error);
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const renderFissure = ({ item }: { item: any }) => {
    const factionIcon = FACTION_IMAGES[item.enemy] || DEFAULT_IMAGE;

    return (
      <View style={styles.card}>
        <Image
          source={factionIcon}
          style={styles.factionImage}
          contentFit="contain"
        />
        <View style={styles.cardInfo}>
          <Text style={styles.tierText}>
            {item.tier} • {item.missionType}
          </Text>
          <Text style={styles.nodeText}>{item.node}</Text>
          <Text style={styles.enemyText}>Enemigos: {item.enemy}</Text>
          <Text style={styles.etaText}>Expira en: {item.eta}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.headerTitle}>Fisuras del Vacío Activas</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#00ffcc" style={{ marginTop: 40 }} />
      ) : (
        <FlatList
          data={fissures}
          keyExtractor={(item, index) => item.id || index.toString()}
          renderItem={renderFissure}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00ffcc',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 24,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2c2c2c',
  },
  factionImage: {
    width: 55,
    height: 55,
    marginRight: 14,
  },
  cardInfo: {
    flex: 1,
  },
  tierText: {
    color: '#d4af37',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  nodeText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  enemyText: {
    color: '#aaaaaa',
    fontSize: 13,
    marginTop: 2,
  },
  etaText: {
    color: '#00ffcc',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
});
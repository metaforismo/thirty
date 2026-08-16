import { experiments } from '@thirty/experiments';
import { ExperimentCard } from '@thirty/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TOTAL_DAYS = 30;

export default function HomeScreen() {
  const shipped = experiments.length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>30 DAYS · 30 EXPERIMENTS</Text>
          <Text style={styles.title}>THIRTY</Text>
          <Text style={styles.subtitle}>
            A public attempt to push React Native further every day.
          </Text>
        </View>

        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.label}>PROGRESS</Text>
            <Text style={styles.progressValue}>{shipped} / {TOTAL_DAYS}</Text>
          </View>
          <View style={styles.track}>
            <View
              style={[
                styles.fill,
                { width: `${(shipped / TOTAL_DAYS) * 100}%` },
              ]}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiments</Text>
          {experiments.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIndex}>01</Text>
              <View style={styles.emptyCopy}>
                <Text style={styles.emptyTitle}>Day 01 is next.</Text>
                <Text style={styles.emptyBody}>
                  The foundation is ready. The first experiment will appear here.
                </Text>
              </View>
            </View>
          ) : (
            experiments.map((experiment) => (
              <ExperimentCard
                key={experiment.day}
                day={experiment.day}
                title={experiment.title}
                focus={experiment.focus}
                summary={experiment.summary}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#09090b',
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 56,
  },
  hero: {
    paddingTop: 56,
    paddingBottom: 52,
  },
  eyebrow: {
    color: '#8b8b93',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.6,
    marginBottom: 14,
  },
  title: {
    color: '#f7f7f8',
    fontSize: 64,
    fontWeight: '900',
    letterSpacing: -4,
    lineHeight: 66,
  },
  subtitle: {
    color: '#a1a1aa',
    fontSize: 18,
    lineHeight: 27,
    marginTop: 18,
    maxWidth: 420,
  },
  progressSection: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#2a2a2e',
    paddingTop: 20,
    paddingBottom: 52,
  },
  progressHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    color: '#71717a',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  progressValue: {
    color: '#d4d4d8',
    fontSize: 13,
    fontVariant: ['tabular-nums'],
  },
  track: {
    backgroundColor: '#202024',
    borderRadius: 999,
    height: 3,
    overflow: 'hidden',
  },
  fill: {
    backgroundColor: '#f4f4f5',
    borderRadius: 999,
    height: '100%',
  },
  section: {
    gap: 16,
  },
  sectionTitle: {
    color: '#f4f4f5',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.6,
  },
  emptyState: {
    alignItems: 'flex-start',
    borderColor: '#27272a',
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 18,
    padding: 20,
  },
  emptyIndex: {
    color: '#52525b',
    fontSize: 13,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
    paddingTop: 3,
  },
  emptyCopy: {
    flex: 1,
  },
  emptyTitle: {
    color: '#f4f4f5',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 7,
  },
  emptyBody: {
    color: '#8f8f98',
    fontSize: 15,
    lineHeight: 22,
  },
});

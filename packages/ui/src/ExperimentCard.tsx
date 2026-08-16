import { StyleSheet, Text, View } from 'react-native';

export type ExperimentCardProps = {
  day: number;
  title: string;
  focus: string;
  summary: string;
};

export function ExperimentCard({
  day,
  title,
  focus,
  summary,
}: ExperimentCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.meta}>
        <Text style={styles.day}>{String(day).padStart(2, '0')}</Text>
        <Text style={styles.focus}>{focus.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.summary}>{summary}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: '#27272a',
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
  },
  meta: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 22,
  },
  day: {
    color: '#71717a',
    fontSize: 12,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
  focus: {
    color: '#71717a',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  title: {
    color: '#f4f4f5',
    fontSize: 21,
    fontWeight: '700',
    letterSpacing: -0.4,
    marginBottom: 8,
  },
  summary: {
    color: '#a1a1aa',
    fontSize: 15,
    lineHeight: 22,
  },
});

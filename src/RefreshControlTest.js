import React, { Component, useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, RefreshControl } from 'react-native';

const colors = ['#0eae67', '#404aa4', '#792262', '#60229a', '#2777e7', '#aca64a', '#891c2b'];

export default function RefreshControlTest(props) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    console.log('refreshing');
    await new Promise(resolve => {
      setTimeout(() => {
        setRefreshing(false);
        console.log('done');
        resolve();
      }, 3000);
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Title of Page</Text>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            title="Refreshing!"
          />
        }
      >
        <View style={[styles.box, { backgroundColor: colors[Math.floor(Math.random() * 7)], borderColor: 'gray', borderWidth: 1, }]} />
        <View style={[styles.box, { backgroundColor: colors[Math.floor(Math.random() * 7)], borderColor: 'gray', borderWidth: 1, }]} />
        <View style={[styles.box, { backgroundColor: colors[Math.floor(Math.random() * 7)], borderColor: 'gray', borderWidth: 1, }]} />
        <View style={[styles.box, { backgroundColor: colors[Math.floor(Math.random() * 7)], borderColor: 'gray', borderWidth: 1, }]} />
        <View style={[styles.box, { backgroundColor: colors[Math.floor(Math.random() * 7)], borderColor: 'gray', borderWidth: 1, }]} />
        <View style={[styles.box, { backgroundColor: colors[Math.floor(Math.random() * 7)], borderColor: 'gray', borderWidth: 1, }]} />
        <View style={[styles.box, { backgroundColor: colors[Math.floor(Math.random() * 7)], borderColor: 'gray', borderWidth: 1, }]} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  box: {
    width: '100%',
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  }
});

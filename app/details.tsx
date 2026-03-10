import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View, StyleSheet } from "react-native";

export default function Details() {
  const params =useLocalSearchParams();

console.log(params);
  return (
    <ScrollView
    contentContainerStyle={{
      gap: 19,
      padding: 16,
    }}
    >

    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
});
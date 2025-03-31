import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Default React Native icon library

const categories = [
  { id: 1, name: "Technology", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDcYzrEHWQDLjNujuCsx4iFnhWK_bHz7NQzzoWW38WbS5raTaDzbDePXBgd39MhFNKdk&usqp=CAU" },
  { id: 2, name: "Science", image: "https://static.vecteezy.com/system/resources/thumbnails/000/202/093/small_2x/Science-Fair2-Vectors.jpg" },
  { id: 3, name: "Business", image: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg" },
];

const popularItems = [
  { id: 1, title: "React Native for Beginners", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDcYzrEHWQDLjNujuCsx4iFnhWK_bHz7NQzzoWW38WbS5raTaDzbDePXBgd39MhFNKdk&usqp=CAU" },
  { id: 2, title: "Advanced React Concepts", image: "https://static.vecteezy.com/system/resources/thumbnails/000/202/093/small_2x/Science-Fair2-Vectors.jpg" },
  { id: 3, title: "Master JavaScript", image: "https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg" },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome 👋</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="heart-outline" size={24} color="black" />
          <Ionicons name="cart-outline" size={24} color="black" />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput 
          placeholder="Search for courses..." 
          style={styles.searchInput}
        />
      </View>

      {/* Categories Section */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {categories.map(category => (
          <View key={category.id} style={styles.categoryCard}>
            <Image source={{ uri: category.image }} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Popular Items */}
      <Text style={styles.sectionTitle}>Popular Courses</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {popularItems.map(item => (
          <View key={item.id} style={styles.popularCard}>
            <Image source={{ uri: item.image }} style={styles.popularImage} />
            <Text style={styles.popularTitle}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 30,
    marginTop: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: 'gray',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    color: 'black',
  },
  categories: {
    marginTop: 12,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 16,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  popularCard: {
    alignItems: 'center',
    marginRight: 16,
  },
  popularImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  popularTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
});

export default HomeScreen;

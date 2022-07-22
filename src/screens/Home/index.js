import { useEffect, useState, createContext } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
//UI comps.
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
//API KEY
const key = "c856d2a3eeee425185815f1c496132a2";

//Context API
export const globalContext = createContext({});

function Home({ navigation }) {
  return (
    <globalContext.Provider value={{ navigation }}>
      <SafeAreaView style={styles.layout}>
        <SearchBar />
        <RecipeList />
      </SafeAreaView>
    </globalContext.Provider>
  );
}

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  const recipeRequest = async () => {
    await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=${key}`
    )
      .catch((err) => console.log(err.message))
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  };

  useEffect(() => {
    recipeRequest();
  }, []);

  console.log(recipes.results);

  return (
    <ScrollView style={styles.list}>
      {recipes.results !== undefined &&
        recipes.results.map((elem) => (
          <Card key={elem.id} title={elem.title} img={elem.image} />
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  list: {
    marginTop: "5%",
  },
});

export default Home;

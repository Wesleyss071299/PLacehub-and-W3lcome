import React, { useState, useEffect, useCallback } from "react";
import { Container, InputBox } from "./styles";
import { FlatList } from "react-native";
import Input from "../../components/Input";
import { EvilIcons } from "@expo/vector-icons";
import api from "../../services/api";
import { Person, ResponsePerson } from "../../types";
import { useNavigation } from "@react-navigation/native";

import PersonItem from "../../components/PersonItem";

const HomeScreen: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  const fetchData = async () => {
    const response: ResponsePerson = await api.get("persons", {
      params: {
        page,
      },
    });
    const result: Person[] = response.data;
    setPersons(page === 1 ? result : [...persons, ...result]);
  };

  const searchData = async () => {
    const response: ResponsePerson = await api.get("persons", {
      params: {
        name: search,
      },
    });
    const result: Person[] = response.data;
    setPersons(result);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const refreshData = async () => {
    setRefreshing(true);
    setSearch("");
    setPage(1);
    fetchData();
    setRefreshing(false);
  };


  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refreshData();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    searchData();
  }, [search]);

  const renderItem = useCallback(
    ({ item }) => (
      <PersonItem
        id={item._id}
        name={item.name}
        email={item.email}
        pictureUrl={item.pictureUrl}
      />
    ),
    []
  );

  return (
    <Container>
      <InputBox>
        <Input value={search} onChangeText={(search) => setSearch(search)}>
          <EvilIcons
            name="search"
            size={24}
            color="#000"
            onPress={searchData}
            style={{ marginRight: 10 }}
          />
        </Input>
      </InputBox>
      <FlatList
        style={{ marginTop: 38, width: "95%", alignSelf: "center" }}
        keyExtractor={(person) => person._id}
        renderItem={renderItem}
        data={persons}
        onRefresh={refreshData}
        refreshing={refreshing}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        initialNumToRender={10}
        horizontal={false}
      />
    </Container>
  );
};

export default HomeScreen;

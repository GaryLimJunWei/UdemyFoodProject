import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultLists from '../components/ResultsList';


const SearchScreen = () => {

    const [term,onTermChange] = useState('');
    const [searchApi,results,errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(results => {
            return results.price === price;
        })
    };

    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={onTermChange}
            onTermSubmit={() => searchApi(term)} 
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultLists 
            results={filterResultsByPrice('$')} 
            title="Cost Effective"/>
            <ResultLists 
            results={filterResultsByPrice('$$')} 
            title="Bit Pricier"/>
            <ResultLists
            results={filterResultsByPrice('$$$')} 
            title="Big Spender"/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
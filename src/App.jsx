import Header from "./components/Header";
import Banner from "./components/Banner";
import Container  from "./Layouts/Container";
import Section from "./Layouts/Section";
import MovieList from "./components/Movies/MovieList";
import { useState } from "react";


function App() {

    const [sectionToggle, setSectionToggle] = useState({
        first:"On TV",
        second:"On TV",
        third:"Today"
    })

    const handleToggledValue =(section, selectedValue) =>{
        setSectionToggle(prev=>({
        
                ...prev,
                [section]: selectedValue
            }))
    }
 

    return <>
        <Header/>
        <Container>
         <Banner/>
         <Section title="What's Popular" items={["On TV", "In Theatres"]} onToggle={handleToggledValue.bind(null,'first')} isToggled={sectionToggle.first==='On TV'?false:true}>
            <MovieList fetch={sectionToggle.first} />
         </Section>           
        </Container>
        
    </>
}

export default App;
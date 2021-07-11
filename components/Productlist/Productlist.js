import styled from 'styled-components'
import { fetchData } from '../../Api/api';

const Container = styled.div`
display: flex; 
flex-direction: column;
justify-content: center;
min-width: 300px`;

const Item = styled.span`
    display:flex;
    background-color: red;
    align-items:center;
    flex-direction: column`;

export default Container; Item

const ProducList = () => {
    const {isLoading, data} = useQuery("productlist", () => fetchData)
    if (isLoading) <div>Carregando</div>
        return(
            <Container></Container>
        )
}


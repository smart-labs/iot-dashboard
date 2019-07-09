import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faFan,
  faTrash,
  faChartArea,
  faMap,
} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import styled from 'styled-components';

const HomeModule = () => {
  return (
    <Container>
      <Link to="/ac">
        <Card
          width={'400px'}
          height={'75px'}
          color={3}
          title={'Ar-condicionado'}
          description=""
          scale=""
          sensorId=""
          sensorValue=""
          icon={faFan}
        />
      </Link>

      <Link to="/trash">
        <Card
          width={'400px'}
          height={'75px'}
          color={2}
          title={'Lixeira'}
          description=""
          scale=""
          sensorId=""
          sensorValue=""
          icon={faTrash}
        />
      </Link>

      <Link to="/room">
        <Card
          width={'400px'}
          height={'75px'}
          color={0}
          title={'Sala'}
          description=""
          scale=""
          sensorId=""
          sensorValue=""
          icon={faChartArea}
        />
      </Link>

      <Link to="/map">
        <Card
          width={'400px'}
          height={'75px'}
          color={1}
          title={'Mapa'}
          description=""
          scale=""
          sensorId=""
          sensorValue=""
          icon={faMap}
        />
      </Link>
    </Container>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 3.5em;
    padding: 6px;
    cursor: pointer;
  }

  span {
    font-size: 1.5em;
    padding: 0 0.5em;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export default HomeModule;

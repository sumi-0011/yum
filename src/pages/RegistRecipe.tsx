import Layout from 'components/Layout';
import React from 'react';
import {Input, Container, Heading, Box} from '@chakra-ui/react';
type Props = {};

const RegistRecipe = ({}: Props) => {
  return (
    <Layout>
      <Container>
        <Heading>요리정보</Heading>
        <Box>
          <Box>
            <Input placeholder="Basic usage" />
            <Input placeholder="Basic usage" />
          </Box>
          <Box>
            <Input placeholder="Basic usage" type="file" />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default RegistRecipe;

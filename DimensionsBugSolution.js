import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const dimensions = Dimensions.get('window');
    setWindowWidth(dimensions.width);
    setWindowHeight(dimensions.height);
  }, []);

  return (
    <View>
      <Text>Window Width: {windowWidth}</Text>
      <Text>Window Height: {windowHeight}</Text>
    </View>
  );
};

export default DimensionsBugSolution; 
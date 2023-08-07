import React from 'react';
import {View, Text, useTVEventHandler} from 'react-native';

export function HomeScreenTv() {
  const myTVEventHandler = (evt: {eventType: string}) => {
    if (evt && evt.eventType === 'right') {
      //   cmp.setState({board: cmp.state.board.move(2)});
    } else if (evt && evt.eventType === 'up') {
      //   cmp.setState({board: cmp.state.board.move(1)});
    } else if (evt && evt.eventType === 'left') {
      //   cmp.setState({board: cmp.state.board.move(0)});
    } else if (evt && evt.eventType === 'down') {
      //   cmp.setState({board: cmp.state.board.move(3)});
    } else if (evt && evt.eventType === 'playPause') {
      //   cmp.restartGame();
    }
  };

  useTVEventHandler(myTVEventHandler);

  return (
    <View>
      <Text>Home TV</Text>
    </View>
  );
}

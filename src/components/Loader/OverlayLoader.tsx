import React from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import { useLoaderStyles } from "./OverlayLoader.Style";

interface OverlayLoaderProps {
  visible: boolean;
}

const OverlayLoader: React.FC<OverlayLoaderProps> = ({ visible }) => {
  const styles = useLoaderStyles();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      testID="overlay-loader-modal"
    >
      <View style={styles.overlay}>
        <ActivityIndicator
          size="large"
          color="#ffffff"
          testID="activity-indicator"
        />
      </View>
    </Modal>
  );
};

export default OverlayLoader;

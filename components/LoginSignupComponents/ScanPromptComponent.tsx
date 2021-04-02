import React, { SetStateAction } from 'react';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

interface Dialog {
  isDialogVisible: boolean;
  setIsDialogVisible: React.Dispatch<SetStateAction<boolean>>;
  handlePressCancel: () => void;
  handlePressScan: () => void;
}

export default function ScanPrompt({
  isDialogVisible,
  setIsDialogVisible,
  handlePressCancel,
  handlePressScan,
}: Dialog): JSX.Element {
  return (
    <Portal>
      <Dialog
        visible={isDialogVisible}
        onDismiss={() => setIsDialogVisible(false)}
      >
        <Dialog.Title>Welcome</Dialog.Title>
        <Dialog.Content>
          <Paragraph>To get started, simply scan your QR code</Paragraph>
          <Paragraph>This should have arrived in the post</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handlePressCancel}>Cancel</Button>
          <Button onPress={handlePressScan}>Scan</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

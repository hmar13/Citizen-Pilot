/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

interface Dialog {
  isDialogVisible: boolean;
  setIsDialogVisible: any;
  handlePressCancel: any;
  handlePressScan: any;
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
  )
}

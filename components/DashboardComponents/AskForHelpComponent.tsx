import React, { SetStateAction } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Paragraph, Portal, Dialog } from 'react-native-paper';


interface DialogInterface {
  isDialogVisible: boolean;
  setIsDialogVisible: React.Dispatch<SetStateAction<boolean>>;
}
export default function AskForHelp({ isDialogVisible, setIsDialogVisible }: DialogInterface): JSX.Element {
  const hideDialog = () => setIsDialogVisible(false);

  return (

    <Portal>
      <Dialog visible={isDialogVisible} onDismiss={hideDialog} style={{ borderRadius: 12 }}>
        <Dialog.Title>Welcome to Citizen Pilot</Dialog.Title>
        <Dialog.Content>
          <Paragraph style={{ marginBottom: 10 }}>Citizen Pilot is an app that allows you to make your voice heard!</Paragraph>
          <Paragraph>From the dashboard it’s possible to:</Paragraph>
          <Paragraph style={styles.paragraphHeader}>Report a problem</Paragraph>
          <Paragraph style={styles.paragraphText}>Report a pothole, an obscured road sign, a blocked drain, or whatever else is causing trouble.</Paragraph>
          <Paragraph style={styles.paragraphHeader}>Propose a solution</Paragraph>
          <Paragraph style={styles.paragraphText}>Have an idea that will help make your neighbourhood a better place to live. Tell us all about it here.</Paragraph>
          <Paragraph style={styles.paragraphHeader}>What we’re working on</Paragraph>
          <Paragraph style={styles.paragraphText}>Here you’ll find information about projects that you’ve suggested that we’re piloting.</Paragraph>
          <Paragraph style={styles.paragraphHeader}>Vote on projects</Paragraph>
          <Paragraph style={styles.paragraphText}>Make your vote count by choosing a project you want to see come to life.</Paragraph>


        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>

  );
}


const styles = StyleSheet.create({
  paragraphHeader: {
    fontWeight: 'bold',
    marginTop: 12,
  },
  paragraphText: {
    marginBottom: 12,
  },
})
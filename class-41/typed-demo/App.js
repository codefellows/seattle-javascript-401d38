import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';

export default function App() {

  const [permissions, setPermissions] = useState(false);
  const [contacts, setContacts] = useState([]);

  const getPermissions = async () => {
    // Requesting phone permissions for using a phone feature.
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    console.log(status);
    setPermissions(status === 'granted' ? true : false);
  }

  const getContacts = async () => {
    const contactList = await Contacts.getContactsAsync();
    setContacts(contactList.data);
  }

  const call = (contact) => {
    const phoneNumber = contact.phoneNumbers[0].number.replace(/[\(\)\-\s+]/g, '');
    let link = `tel:${phoneNumber}`;
    console.log(link);
    Linking.canOpenURL(link)
      .then(supported => Linking.openURL(link))
      .catch(console.error);
  }

  useEffect(() => {
    getPermissions();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text>Click here to get phone contacts</Text>
        <Button
          onPress={getContacts}
          title="Get Contacts"
        />
      </View>
      <View style={styles.smaller}>
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <Button title={item.name} onPress={() => call(item)} />
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // think of this number as parts of a whole
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // border: 'thin solid red'
    borderWidth: 2, // no pixels any longer
    borderStyle: 'solid',
    borderColor: 'black'
  },
  smaller: {
    flex: 3, // think of this number as parts of a whole
    justifyContent: 'center',
    alignItems: 'center'
  }
});

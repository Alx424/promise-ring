import { Text, View, TextInput, Button, Alert } from "react-native"
import { useForm, Controller } from "react-hook-form"
import * as SQLite from 'expo-sqlite';

// OBSOLETE: Replaced by Google Form

/*
const db = await SQLite.openDatabaseAsync('quotes');
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, message TEXT NOT NULL);`);

export function getAllRows() {
    const allRows = async () => await db.getAllAsync('SELECT * FROM test');
    return allRows;
}

export default function QuoteForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      message: "",
    },
  })

  const onSubmit = (data: any) => db.execAsync(`INSERT INTO test (name, message) VALUES ('${data.firstName}${data.lastName}', '${data}');`);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Last name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            />
        )}
        name="lastName"
        />
      {errors.lastName && <Text>This is required.</Text>}
      
      <Controller
        control={control}
        rules={{
            maxLength: 200,
        }}
        render={({field: { onChange, onBlur, value} }) => (
            <TextInput
                placeholder="Message"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
        )}
        name="message"
        />
        {errors.message && <Text>Message can not be empty.</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}
*/
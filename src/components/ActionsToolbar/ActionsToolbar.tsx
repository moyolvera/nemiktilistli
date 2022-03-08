import { FilterType } from '@actions/people';
import { Input, SwitchSelector } from '@components';
import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';

interface ActionsToolbarProps {
  setFilters: (filter: FilterType) => void;
}

function ActionsToolbar({ setFilters }: ActionsToolbarProps) {
  const [selected, setSelected] = React.useState(0);
  const [filterAttending, setFilterAttending] = React.useState(false);
  const [filterNotAttending, setFilterNotAttending] = React.useState(false);
  const [filterAnswered, setFilterAnswered] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    const newFilter = {} as FilterType;

    if (selected !== 0) {
      newFilter.isFromBride = selected === 1;
    }

    if (filterAttending) {
      newFilter.attending = true;
    }

    if (filterNotAttending) {
      newFilter.attending = false;
    }

    if (filterAnswered) {
      newFilter.answered = false;
    }

    newFilter.name = searchTerm;

    setFilters(newFilter);
  }, [
    selected,
    filterAttending,
    filterAnswered,
    filterNotAttending,
    searchTerm
  ]);

  function onChangeIndex(index: number) {
    setSelected(index);
  }

  function filterWithSearch(search: string) {
    setSearchTerm(search);
  }

  function toggleAttending() {
    setFilterAttending(!filterAttending);
  }

  function toggleNotAttending() {
    setFilterNotAttending(!filterNotAttending);
  }

  function toggleWithAnswered() {
    setFilterAnswered(!filterAnswered);
  }

  return (
    <>
      <View style={{ marginBottom: 10, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Input
            label="Buscar"
            required={false}
            showClear
            actionOnDebounce={filterWithSearch}
          />
        </View>
        <TouchableOpacity
          onPress={toggleWithAnswered}
          style={{
            width: 30,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            paddingBottom: 5
          }}>
          <Ionicons
            name="radio-button-off"
            size={20}
            style={[
              filterAnswered
                ? { color: 'rgba(158, 115, 255, 0.7)' }
                : { opacity: 0.3 }
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleNotAttending}
          style={{
            width: 30,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            paddingBottom: 5
          }}>
          <Ionicons
            name="close-circle"
            size={20}
            style={[
              filterNotAttending
                ? { color: 'rgba(158, 115, 255, 0.7)' }
                : { opacity: 0.3 }
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleAttending}
          style={{
            width: 30,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            paddingBottom: 5
          }}>
          <Ionicons
            name="checkmark-circle"
            size={20}
            style={[
              filterAttending
                ? { color: 'rgba(158, 115, 255, 0.7)' }
                : { opacity: 0.3 }
            ]}
          />
        </TouchableOpacity>
      </View>
      <SwitchSelector
        options={['Ambos', 'Kari', 'Moy']}
        selected={selected}
        onChangeIndex={onChangeIndex}
      />
    </>
  );
}

export default ActionsToolbar;

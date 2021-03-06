/* eslint react/prop-types: 0 */

import React from 'react';
import Select from 'react-select';

import CustomKeysField from './components/CustomKeysField';
import CustomRenderField from './components/CustomRenderField';
import DisabledUpsellOptions from './components/DisabledUpsellOptions';
import MultiSelectField from './components/MultiSelectField';
import GroupedOptionsField from './components/GroupedOptionsField';
import RemoteSelectField from './components/RemoteSelectField';
import SelectedValuesField from './components/SelectedValuesField';
import StatesField from './components/StatesField';
import UsersField from './components/UsersField';
import ValuesAsNumbersField from './components/ValuesAsNumbersField';

var FLAVOURS = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' }
];
var FLAVOURS_WITH_DISABLED_OPTION = FLAVOURS.slice(0);
FLAVOURS_WITH_DISABLED_OPTION.unshift({ label: 'Caramel (You don\'t like it, apparently)', value: 'caramel', disabled: true });

function logChange() {
	console.log.apply(console, [].concat(['Select value changed:'], Array.prototype.slice.apply(arguments)));
}

React.render(
	<div>
		<StatesField label="States" searchable />
		<MultiSelectField label="Multiselect"/>
		<UsersField label="Users (custom options/value)" hint="This example uses Gravatar to render user's image besides the value and the options" />
		<ValuesAsNumbersField label="Values as numbers" />
		<CustomKeysField label="Custom object keys for options" />
		<SelectedValuesField label="Clickable labels (labels as links)" options={FLAVOURS} hint="Open the console to see click behaviour (data/event)" />
		<SelectedValuesField label="Disabled option" options={FLAVOURS_WITH_DISABLED_OPTION} hint="You savage! Caramel is the best..." />
		<DisabledUpsellOptions label="Disabled option with a link"/>
		<GroupedOptionsField label="Option Groups" />
		<SelectedValuesField label="Option Creation (tags mode)" options={FLAVOURS} allowCreate hint="Enter a value that's not in the list, then hit enter" />
		<CustomRenderField label="Custom render options/values" />
		<CustomRenderField label="Custom render options/values (multi)" multi delimiter="," />
		<RemoteSelectField label="Remote Options" hint='Type anything in the remote example to asynchronously load options. Valid alternative results are "A", "AA", and "AB"' />
	</div>,
	document.getElementById('example')
);

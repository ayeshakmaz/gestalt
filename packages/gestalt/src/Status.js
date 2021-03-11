// @flow strict
import React, { type Node } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon.js';
import Flex from './Flex.js';
import Text from './Text.js';

export type StatusColor = 'gray' | 'green' | 'orange' | 'red';

type Props = {|
  type?: 'unstarted' | 'inProgress' | 'halted' | 'ok' | 'problem' | 'canceled' | 'warning',
  title?: string,
  subtext?: string,
  accessibilityLabel: string,
|};

export default function Status(props: Props): Node {
  const { accessibilityLabel, type = 'unstarted', title, subtext } = props;

  let color;
  let icon;

  /*
   * QUESTION: Are switch / case conditionals OK? I've had folks balk at their use in the past.
   */
  switch (type) {
    case 'unstarted':
      icon = 'workflow-status-unstarted';
      color = 'darkGray';
      break;
    case 'inProgress':
      icon = 'workflow-status-in-progress';
      color = 'green';
      break;
    case 'halted':
      icon = 'workflow-status-halted';
      color = 'darkGray';
      break;
    case 'ok':
      icon = 'workflow-status-ok';
      color = 'green';
      break;
    case 'problem':
      icon = 'workflow-status-problem';
      color = 'red';
      break;
    /*
     * TODO: We're missing the canceled icon - so that'll need to be added to the Icon component
     */
    /*
    case 'canceled':
      icon = 'workflow-status-canceled';
      color = 'green';
      break;
    */
    case 'warning':
      icon = 'workflow-status-warning';
      color = 'orange';
      break;
    default:
      icon = 'workflow-status-unstarted';
      color = 'darkGray';
  }

  const textNode = title && (
    <Flex direction="column">
      <Text size="md">{title}</Text>
      {subtext ? (
        <Text size="md" color="gray">
          {subtext}
        </Text>
      ) : null}
    </Flex>
  );

  return (
    <Flex gap={2}>
      <Icon accessibilityLabel={accessibilityLabel} size={20} color={color} icon={icon} />
      {textNode}
    </Flex>
  );
}

Status.propTypes = {
  // $FlowFixMe[signature-verification-failure] flow 0.135.0 upgrade
  type: PropTypes.oneOf([
    'unstarted',
    'inProgress',
    'halted',
    'ok',
    'problem',
    'canceled',
    'warning',
  ]).isRequired,
  title: PropTypes.string,
  subtext: PropTypes.string,
  accessibilityLabel: PropTypes.string.isRequired,
};
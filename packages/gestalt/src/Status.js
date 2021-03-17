// @flow strict
import React, { type Node } from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon.js';
import Flex from './Flex.js';
import Text from './Text.js';
import Box from './Box.js';

export type StatusColor = 'gray' | 'green' | 'orange' | 'red';

type Props = {|
  type?: 'unstarted' | 'inProgress' | 'halted' | 'ok' | 'problem' | 'canceled' | 'warning',
  title: string,
  subtext?: string,
|};

export default function Status(props: Props): Node {
  const { type = 'unstarted', title, subtext } = props;

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
    case 'canceled':
      icon = 'workflow-status-canceled';
      color = 'gray';
      break;
    case 'warning':
      icon = 'workflow-status-warning';
      color = 'orange';
      break;
    default:
      icon = 'workflow-status-unstarted';
      color = 'darkGray';
  }

  return (
    <Flex direction="column">
      <Flex gap={2} alignItems="center">
        <Icon accessibilityLabel="" size={16} color={color} icon={icon} />
        <Text size="md">{title}</Text>
      </Flex>

      {subtext && (
        <Flex gap={2} alignItems="center">
          <Box marginStart={6}>
            <Text size="md" color="gray">
              {subtext}
            </Text>
          </Box>
        </Flex>
      )}
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
};

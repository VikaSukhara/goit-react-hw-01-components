import {Wrapper, List, ListItem, Title} from './Statistics.styled'


export const Statistics = ({ stats, title }) => {
  return (
    <Wrapper>

      {title.length > 0 && (<Title>Upload stats</Title>)}
      <List>
        {stats.map(stat => {
          return (
            <ListItem key = {stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}</span>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};

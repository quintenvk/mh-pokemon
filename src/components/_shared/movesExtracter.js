export default move => ({
  learnMethod: move.version_group_details[0].move_learn_method.name,
  name: move.move.name,
});

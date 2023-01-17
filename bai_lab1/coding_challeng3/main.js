const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card']
]);
console.log(gameEvents.values());
const events = new Set(gameEvents.values());
// yêu cầu xóa sự kiện từ phút 64
gameEvents.delete(64);
// 3.
const time = [...gameEvents.keys()]
console.log(time)
console.log(`An event happend, on average, every ${time / gameEvents.size} minutes`);
for(const [min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : 'SECOND'
    console.log(`[HALF] ${min}: ${event}`);
}
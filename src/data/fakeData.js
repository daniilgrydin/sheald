// export const fakeData = {
//   [
//     {
//         name: "Alice Smith",
//         androidID: "a7b3c9d1e2f45678",
//         entries: [
//             {"risk": 0.1, "temperature": 36.6, "air_quality": 95, "timestamp": 1732835149},
//             {"risk": 0.1, "temperature": 36.6, "air_quality": 95, "timestamp": 1732835149},
//             {"risk": 0.2, "temperature": 36.9, "air_quality": 90, "timestamp": 1732895149},
//             {"risk": 0.3, "temperature": 37.2, "air_quality": 88, "timestamp": 1732935149},
//             {"risk": 0.5, "temperature": 37.5, "air_quality": 85, "timestamp": 1732975149},
//             {"risk": 0.6, "temperature": 37.8, "air_quality": 82, "timestamp": 1733035149},
//             {"risk": 0.7, "temperature": 38.1, "air_quality": 80, "timestamp": 1733135149},
//             {"risk": 0.8, "temperature": 38.4, "air_quality": 75, "timestamp": 1733235149},
//             {"risk": 0.9, "temperature": 38.7, "air_quality": 70, "timestamp": 1733335149},
//             {"risk": 1.0, "temperature": 39.0, "air_quality": 65, "timestamp": 1733435149},
//             {"risk": 1.2, "temperature": 39.3, "air_quality": 60, "timestamp": 1733535149}
//         ]
//     },
//     {
//         name: "Bob Doe",
//         androidID: "b7c9d1e2f3a45678",
//         entries: [
//             {"risk": 0.1, "temperature": 36.6, "noise_level": 38, "timestamp": 1732835149},
//             {"risk": 0.1, "temperature": 36.5, "noise_level": 39, "timestamp": 1732895149},
//             {"risk": 0.1, "temperature": 36.4, "noise_level": 40, "timestamp": 1732935149},
//             {"risk": 0.1, "temperature": 36.3, "noise_level": 41, "timestamp": 1732975149},
//             {"risk": 0.1, "temperature": 36.2, "noise_level": 42, "timestamp": 1733035149},
//             {"risk": 0.1, "temperature": 36.1, "noise_level": 43, "timestamp": 1733135149},
//             {"risk": 0.1, "temperature": 36.0, "noise_level": 44, "timestamp": 1733235149},
//             {"risk": 0.1, "temperature": 35.9, "noise_level": 45, "timestamp": 1733335149},
//             {"risk": 0.1, "temperature": 35.8, "noise_level": 46, "timestamp": 1733435149},
//             {"risk": 0.1, "temperature": 35.7, "noise_level": 47, "timestamp": 1733535149}
//         ]
//     },
//     {
//         name: "John Coder",
//         androidID: "c9d1e2f3a4b56789",
//         entries: [
//             {"risk": 0.1, "temperature": 36.6, "timestamp": 1732835149},
//             {"risk": 0.2, "temperature": 36.9, "timestamp": 1732895149},
//             {"risk": 0.3, "temperature": 37.2, "timestamp": 1732935149},
//             {"risk": 0.4, "temperature": 37.5, "timestamp": 1732975149},
//             {"risk": 0.5, "temperature": 37.8, "timestamp": 1733035149},
//             {"risk": 0.6, "temperature": 38.1, "timestamp": 1733135149},
//             {"risk": 0.7, "temperature": 38.4, "timestamp": 1733235149},
//             {"risk": 0.8, "temperature": 38.7, "timestamp": 1733335149},
//             {"risk": 0.9, "temperature": 39.0, "timestamp": 1733435149},
//             {"risk": 1.0, "temperature": 39.3, "timestamp": 1733535149}
//         ]
//     },
//     {
//         name: "Emily Johnson",
//         androidID: "d0e1f2a3b4c56789",
//         entries: [
//             {"risk": 0.2, "temperature": 36.7, "noise_level": 41, "air_quality": 93, "timestamp": 1732785149},
//             {"risk": 0.3, "temperature": 37.0, "noise_level": 43, "air_quality": 90, "timestamp": 1732885149},
//             {"risk": 0.5, "temperature": 37.5, "noise_level": 50, "air_quality": 85, "timestamp": 1732985149},
//             {"risk": 0.6, "temperature": 37.8, "noise_level": 55, "air_quality": 82, "timestamp": 1733085149},
//             {"risk": 0.7, "temperature": 38.1, "noise_level": 57, "air_quality": 78, "timestamp": 1733185149},
//             {"risk": 0.8, "temperature": 38.4, "noise_level": 60, "air_quality": 75, "timestamp": 1733285149},
//             {"risk": 1.0, "temperature": 38.7, "noise_level": 65, "air_quality": 70, "timestamp": 1733385149},
//             {"risk": 1.1, "temperature": 39.0, "noise_level": 70, "air_quality": 68, "timestamp": 1733485149},
//             {"risk": 1.3, "temperature": 39.3, "noise_level": 75, "air_quality": 65, "timestamp": 1733585149},
//             {"risk": 1.4, "temperature": 39.6, "noise_level": 80, "air_quality": 60, "timestamp": 1733685149}
//         ]
//     },
//     {
//         name: "Charlie Brown",
//         androidID: "e1f2g3h4i5j67890",
//         entries: [
//             {"risk": 0.1, "noise_level": 35, "air_quality": 99, "timestamp": 1732835149},
//             {"risk": 0.2, "noise_level": 37, "air_quality": 97, "timestamp": 1732885149},
//             {"risk": 0.4, "noise_level": 42, "air_quality": 93, "timestamp": 1732935149},
//             {"risk": 0.6, "noise_level": 48, "air_quality": 89, "timestamp": 1732985149},
//             {"risk": 0.8, "noise_level": 52, "air_quality": 85, "timestamp": 1733035149},
//             {"risk": 1.0, "noise_level": 58, "air_quality": 80, "timestamp": 1733085149},
//             {"risk": 1.1, "noise_level": 62, "air_quality": 77, "timestamp": 1733135149},
//             {"risk": 1.2, "noise_level": 65, "air_quality": 75, "timestamp": 1733185149},
//             {"risk": 1.3, "noise_level": 70, "air_quality": 72, "timestamp": 1733235149},
//             {"risk": 1.5, "noise_level": 75, "air_quality": 68, "timestamp": 1733285149}
//         ]
//     }
// ]
// };

var io = io('http://' + ip + ':' + port + '/')
function loadMatch(data) {
	loadTeams(teams => {
		$teamList = $('#team_1, #team_2, #team_3, #team_4, #team_5, #team_6, #team_7, #team_8, #team_9, #team_10, #team_11, #team_12')
		$teamList.html(
			"<option value=null>NONE</option><option value='auto' selected>Try to match team automatically</option>"
		)

		teams.forEach(function (team, id) {
			let $option = $(
				"<option value='" +
					team._id +
					"'>" +
					team.team_name +
					' (' +
					team.short_name +
					')</option>'
			)
			if (team.logo) {
				$option.attr('data-icon', '/storage/' + team.logo)
			}
			$teamList.append($option)
		}, this)
		if (data) {
			$('#botype').val(data.match)
			$('#team_1_score').val('0').val(data.team_1.map_score)
			$('#team_2_score').val('0').val(data.team_2.map_score)
			$('#team_1').val('auto').val(data.team_1.team)
			$('#team_2').val('auto').val(data.team_2.team)
			$('#online_map').val('').val(data.map.online_map)
			$('#team_pick_map').val('').val(data.map.team_pick_map)
			$('.map_pick_1').val('').val(data.map.map_pick_1)
			$('.team_1_pick').val('').val(data.map.team_1_pick)
			$('.score_map_1').val('').val(data.map.score_map_1)
			$('.win_map_1').val('').val(data.map.win_map_1)
			$('.playing_1').val('').val(data.map.playing_1)
			$('.map_pick_2').val('').val(data.map.map_pick_2)
			$('.team_2_pick').val('').val(data.map.team_2_pick)
			$('.score_map_2').val('').val(data.map.score_map_2)
			$('.playing_2').val('').val(data.map.playing_2)
			$('.win_map_2').val('').val(data.map.win_map_2)
			$('.map_pick_4').val('').val(data.map.map_pick_4)
			$('.team_4_pick').val('').val(data.map.team_4_pick)
			$('.score_map_4').val('').val(data.map.score_map_4)
			$('.playing_4').val('').val(data.map.playing_4)
			$('.win_map_4').val('').val(data.map.win_map_4)
			$('.map_pick_5').val('').val(data.map.map_pick_5)
			$('.team_5_pick').val('').val(data.map.team_5_pick)
			$('.score_map_5').val('').val(data.map.score_map_5)
			$('.playing_5').val('').val(data.map.playing_5)
			$('.win_map_5').val('').val(data.map.win_map_5)
			$('.decider_map').val('').val(data.map.decider_map)
			$('.score_map_3').val('').val(data.map.score_map_3)
			$('.win_map_3').val('').val(data.map.win_map_3)
			$('.playing_3').val('').val(data.map.playing_3)
			$('.decider_map2').val('').val(data.map.decider_map2)
			$('.score_map_6').val('').val(data.map.score_map_6)
			$('.win_map_6').val('').val(data.map.win_map_6)
			$('.playing_6').val('').val(data.map.playing_6)
			$('#team_3').val('auto').val(data.team_3.team)
			$('#team_4').val('auto').val(data.team_4.team)
			$('#team_5').val('auto').val(data.team_5.team)
			$('#team_6').val('auto').val(data.team_6.team)
			$('#team_7').val('auto').val(data.team_7.team)
			$('#team_8').val('auto').val(data.team_8.team)
			$('#team_9').val('auto').val(data.team_9.team)
			$('#team_10').val('auto').val(data.team_10.team)
			$('#team_11').val('auto').val(data.team_11.team)
			$('#team_12').val('auto').val(data.team_12.team)
			$('#left_events').val('').val(data.map.left_events)
			$('#right_events').val('').val(data.map.right_events)
			$('#pick_map_team1').val('').val(data.map.pick_map_team1)
			$('#pick_map_team2').val('').val(data.map.pick_map_team2)
			$('#pick_map_team4').val('').val(data.map.pick_map_team4)
			$('#pick_map_team5').val('').val(data.map.pick_map_team5)
			$('#decider').val('').val(data.map.decider)
			$('#decider2').val('').val(data.map.decider2)
			$('#logo_champ').val('').val(data.map.logo_champ)
		}
		$('select').formSelect()
	})
}
$(document).ready(() => {
	$('#set').click(() => {
		let match = {
			match: $('#botype').val(),
			team_1: {
				map_score: $('#team_1_score').val(),
				team: $('#team_1').val(),
			},
			team_2: {
				map_score: $('#team_2_score').val(),
				team: $('#team_2').val(),
			},
			map: {
				online_map: $('#online_map').val(),
				team_pick_map: $('#team_pick_map').val(),
				map_pick_1: $('.map_pick_1').val(),
				team_1_pick: $('.team_1_pick').val(),
				score_map_1: $('.score_map_1').val(),
				win_map_1: $('.win_map_1').val(),
				playing_1: $('.playing_1').val(),
				map_pick_2: $('.map_pick_2').val(),
				team_2_pick: $('.team_2_pick').val(),
				score_map_2: $('.score_map_2').val(),
				playing_2: $('.playing_2').val(),
				win_map_2: $('.win_map_2').val(),
				map_pick_4: $('.map_pick_4').val(),
				team_4_pick: $('.team_4_pick').val(),
				score_map_4: $('.score_map_4').val(),
				playing_4: $('.playing_4').val(),
				win_map_4: $('.win_map_4').val(),
				map_pick_5: $('.map_pick_5').val(),
				team_5_pick: $('.team_5_pick').val(),
				score_map_5: $('.score_map_5').val(),
				playing_5: $('.playing_5').val(),
				win_map_5: $('.win_map_5').val(),
				decider_map: $('.decider_map').val(),
				score_map_3: $('.score_map_3').val(),
				win_map_3: $('.win_map_3').val(),
				playing_3: $('.playing_3').val(),
				decider_map2: $('.decider_map2').val(),
				score_map_6: $('.score_map_6').val(),
				win_map_6: $('.win_map_6').val(),
				playing_6: $('.playing_6').val(),
				left_events: $('#left_events').val(),
				right_events: $('#right_events').val(),
				pick_map_team1: $('#pick_map_team1').val(),
				pick_map_team2: $('#pick_map_team2').val(),
				pick_map_team4: $('#pick_map_team4').val(),
				pick_map_team5: $('#pick_map_team5').val(),
				decider: $('#decider').val(),
				decider2: $('#decider2').val(),
				logo_champ: $('#logo_champ').val(),
			},
			team_3: {
				team: $('#team_3').val(),
			},
			team_4: {
				team: $('#team_4').val(),
			},
			team_5: {
				team: $('#team_5').val(),
			},
			team_6: {
				team: $('#team_6').val(),
			},
			team_7: {
				team: $('#team_7').val(),
			},
			team_8: {
				team: $('#team_8').val(),
			},
			team_9: {
				team: $('#team_9').val(),
			},
			team_10: {
				team: $('#team_10').val(),
			},
			team_11: {
				team: $('#team_11').val(),
			},
			team_12: {
				team: $('#team_12').val(),
			},
		}
		io.emit('update_match', match)
	})
	$('#swap').click(() => {
		let match = {
			match: $('#botype').val(),
			team_2: {
				map_score: $('#team_1_score').val(),
				team: $('#team_1').val(),
			},
			team_1: {
				map_score: $('#team_2_score').val(),
				team: $('#team_2').val(),
			},
			team_3: {
				team: $('#team_3').val(),
			},
			team_4: {
				team: $('#team_4').val(),
			},
			team_5: {
				team: $('#team_5').val(),
			},
			team_6: {
				team: $('#team_6').val(),
			},
			team_7: {
				team: $('#team_7').val(),
			},
			team_8: {
				team: $('#team_8').val(),
			},
			team_9: {
				team: $('#team_9').val(),
			},
			team_10: {
				team: $('#team_10').val(),
			},
			team_11: {
				team: $('#team_11').val(),
			},
			team_12: {
				team: $('#team_12').val(),
			},
			map: {
				online_map: $('#online_map').val(),
				team_pick_map: $('#team_pick_map').val(),
				map_pick_1: $('.map_pick_1').val(),
				team_1_pick: $('.team_1_pick').val(),
				score_map_1: $('.score_map_1').val(),
				win_map_1: $('.win_map_1').val(),
				playing_1: $('.playing_1').val(),
				map_pick_2: $('.map_pick_2').val(),
				team_2_pick: $('.team_2_pick').val(),
				score_map_2: $('.score_map_2').val(),
				playing_2: $('.playing_2').val(),
				win_map_2: $('.win_map_2').val(),
				map_pick_4: $('.map_pick_4').val(),
				team_4_pick: $('.team_4_pick').val(),
				score_map_4: $('.score_map_4').val(),
				playing_4: $('.playing_4').val(),
				win_map_4: $('.win_map_4').val(),
				map_pick_5: $('.map_pick_5').val(),
				team_5_pick: $('.team_5_pick').val(),
				score_map_5: $('.score_map_5').val(),
				playing_5: $('.playing_5').val(),
				win_map_5: $('.win_map_5').val(),
				decider_map: $('.decider_map').val(),
				score_map_3: $('.score_map_3').val(),
				win_map_3: $('.win_map_3').val(),
				playing_3: $('.playing_3').val(),
				decider_map2: $('.decider_map2').val(),
				score_map_6: $('.score_map_6').val(),
				win_map_6: $('.win_map_6').val(),
				playing_6: $('.playing_6').val(),
				left_events: $('#left_events').val(),
				right_events: $('#right_events').val(),
				pick_map_team1: $('#pick_map_team1').val(),
				pick_map_team2: $('#pick_map_team2').val(),
				pick_map_team4: $('#pick_map_team4').val(),
				pick_map_team5: $('#pick_map_team5').val(),
				decider: $('#decider').val(),
				decider2: $('#decider2').val(),
				logo_champ: $('#logo_champ').val(),
			},
		}
		io.emit('update_match', match)
	})
	$('#ref').click(() => {
		io.emit('refresh', true)
	})
	io.on('match', loadMatch)
	loadMatch()
	io.emit('ready', true)
})

Feature: login with owner role admin
    Scenario Outline: 1-login with owner credentials
        Given user have the dashboard url
        When enter <email> and <password>
        And click on login button
        Then user can login to dashboard-orders tab

        Examples:
            | email                  | password   |
            | 'qa+owner@zyda.com'    | 'test1234' |
            | 'qa+manager@zyda.com'  | 'test1234' |
            | 'qa+operator@zyda.com' | 'test1234' |

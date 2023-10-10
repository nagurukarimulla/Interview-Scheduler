public with sharing class InterviewFeedbackController {
    @AuraEnabled(cacheable=true)
    public static CEMS_Job_Opening__c getJobOpeningSkills(String positionName) {
        try {
            return [SELECT CEMS_Skills__c FROM CEMS_Job_Opening__c WHERE CEMS_Position_Name__c = :positionName LIMIT 1];
        } catch (Exception e) {
            return null;
        }
    }
}

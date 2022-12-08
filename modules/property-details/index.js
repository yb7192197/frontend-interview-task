/* eslint-disable max-statements */
import { add, format, differenceInCalendarYears } from "date-fns";
import React from "react";
import { Button } from "../../components/button";
import Badge from "../../components/badge";
import RowContainer from "../../components/row-container";
import {
  AccountHeadline, AccountLabel, AccountList, AccountListItem, AccountSection, InfoText, Inset, InfoRow
} from "./style";

const Detail = ({ account }) => {
  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  const sincePurchase =
    account.recentValuation.amount - account.originalPurchasePrice;
  const sincePurchasePercentage = sincePurchase / account.originalPurchasePrice;
  const annualAppreciation =
    sincePurchasePercentage /
    differenceInCalendarYears(
      new Date(),
      new Date(account.originalPurchasePriceDate)
    );
  const valuationColour = { good: "green", bad: "red", neutral: "grey" };

  return (
    <Inset>
      <AccountSection>
        <AccountLabel>Estimated Value</AccountLabel>
        <AccountHeadline>
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(account.recentValuation.amount)}
        </AccountHeadline>
        <AccountList>
          <AccountListItem><InfoText>
            {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
          </InfoText></AccountListItem>
          <AccountListItem><InfoText>
            {`Next update ${format(
              add(lastUpdate, { days: account.updateAfterDays }),
              "do MMM yyyy"
            )}`}
          </InfoText></AccountListItem>
        </AccountList>
      </AccountSection>
      <AccountSection>
        <AccountLabel>Property details</AccountLabel>
        <RowContainer>
          <AccountList>
            <AccountListItem><InfoText>{account.name}</InfoText></AccountListItem>
            <AccountListItem><InfoText>{account.bankName}</InfoText></AccountListItem>
            <AccountListItem><InfoText>{account.postcode}</InfoText></AccountListItem>
          </AccountList>
        </RowContainer>
      </AccountSection>
      {account.recentValuation && (
        <AccountSection>
          <AccountLabel>Valuation changes</AccountLabel>
          <RowContainer>
            <AccountList>
              <AccountListItem>
                <InfoText>
                  {"Purchased for "}
                  <b>
                  {new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(Math.abs(account.originalPurchasePrice))}
                  </b>
                  {` in ${format(new Date(account.originalPurchasePriceDate), "MMMM yyyy")}`}
                </InfoText>
              </AccountListItem>
              <AccountListItem>
                <InfoRow>
                  Since purchase
                  <Badge
                    style={{marginLeft: 'auto'}}
                    colour={valuationColour[account.recentValuation.status]}
                  >
                    {`${new Intl.NumberFormat("en-GB", {
                      style: "currency",
                      currency: "GBP",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(sincePurchase)} (${
                      new Intl.NumberFormat("en-GB", {
                        style: "percent",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      }).format(sincePurchasePercentage)
                     })`}
                  </Badge>
                </InfoRow>
              </AccountListItem>
              <AccountListItem>
                <InfoRow>
                  Annual appreciation
                  <Badge
                    style={{marginLeft: 'auto'}}
                    colour={valuationColour[account.recentValuation.status]}
                  >
                    {new Intl.NumberFormat("en-GB", {
                      style: "percent",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(annualAppreciation)}
                  </Badge>
                </InfoRow>
              </AccountListItem>
            </AccountList>
          </RowContainer>
        </AccountSection>
      )}
      {mortgage && (
        <AccountSection>
          <AccountLabel>Mortgage</AccountLabel>
          <RowContainer
            // This is a dummy action
            onClick={() => alert("You have navigated to the mortgage page")}
          >
            <AccountList>
              <AccountListItem><InfoText>
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                }).format(
                  Math.abs(account.associatedMortgages[0].currentBalance)
                )}
              </InfoText></AccountListItem>
              <AccountListItem><InfoText>{account.associatedMortgages[0].name}</InfoText></AccountListItem>
            </AccountList>
          </RowContainer>
        </AccountSection>
      )}
      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
